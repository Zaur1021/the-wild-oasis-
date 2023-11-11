import supabase, { SUPABASE_URL as supabaseUrl } from "./supabase";

export async function getCabins() {
  const { data, error } = await supabase.from("Cabins").select("*");
  if (error) {
    console.error("Cabins could not be loaded");
    throw new Error("Cabins could not be loaded");
  }
  return data;
}

export async function createEditCabin(newCabin, id) {
  const hasImagePath = newCabin.image?.startsWith?.(supabaseUrl);
  console.log(newCabin.image);
  const imageName = hasImagePath
    ? newCabin.image
    : `${Math.random()}--${newCabin.image.name}`.replaceAll("/", "");
  const imagePath = `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`;
  //Create/Edit cabin
  let query = supabase.from("Cabins");
  if (!id) query = query.insert([{ ...newCabin, image: imagePath }]);
  if (id) {
    console.log(imagePath);
    query = query.update({ ...newCabin, image: imagePath }).eq("id", id);
  }
  const { data, error } = await query.single().select();
  if (error) {
    console.error(error);
    throw new Error("Cabins could not be created");
  }
  // Upload image
  const { error: storageError } = await supabase.storage
    .from("cabin-images")
    .upload(imageName, newCabin.image);
  //Delete cabin
  if (storageError) {
    await supabase.from("cabins").delete().eq("id", data.id);
    console.log(storageError);
    throw new Error(
      "Cabin image could not be uploaded and the cabin was not created"
    );
  }
  return data;
}
export async function deleteCabin(id) {
  const { data, error } = await supabase.from("Cabins").delete().eq("id", id);

  if (error) {
    console.error("Cabins could not be deleted");
    throw new Error("Cabins could not be deleted");
  }
  return data;
}

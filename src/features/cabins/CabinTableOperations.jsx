import TableOpeerations from "../../ui/TableOperations";
import Filter from "../../ui/Filter";
function CabinTableOperations() {
  return (
    <TableOpeerations>
      <Filter
        toShow={true}
        filterField="discount"
        options={[
          { value: "all", label: "all" },
          { value: "no-discount", label: "No discount" },
          { value: "with-discount", label: "With discount" },
        ]}
      />
    </TableOpeerations>
  );
}

export default CabinTableOperations;

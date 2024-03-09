type Props = {
  selectedPrice?: number;
  onChange: (value?: number) => void;
};

const PriceFilter = ({ selectedPrice, onChange }: Props) => {
  return (
    <div>
      <h4 className="text-md font-semibold mb-2">Max Price</h4>
      <select
        className="p-2 border rounded"
        value={selectedPrice}
        onChange={() =>
          onChange(
            event.target.value ? parseInt(event.target.value) : undefined,
          )
        }
      >
        <option value="">Select Max Price</option>
        {[50, 60, 80, 100, 250, 300, 400].map((price) => (
          <option value={price}>{price}</option>
        ))}
      </select>
    </div>
  );
};
export default PriceFilter;

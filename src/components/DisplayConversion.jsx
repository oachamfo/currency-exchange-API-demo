export default function DisplayConversion({ convertedRate }) {
  return (
    <div>
      <p>
        Conversion: {convertedRate.convertedRate}
        {convertedRate.targetCurrency}
      </p>
    </div>
  );
}

export default function ProductAnalysis() {
  const analysisData = [
    { label: "pH", value: "8.06" },
    { label: "EC (Salts)", value: "11.4" },
    { label: "Dry matter", value: "88.5%" },
    { label: "Organic Carbon", value: "33.8%" },
    { label: "Total Nitrogen", value: "1.93%" },
    { label: "Phosphorus", value: "1.02%" },
    { label: "Potassium", value: "2.43%" },
    { label: "Calcium", value: "4.96%" },
    { label: "Magnesium", value: "1.51%" },
    { label: "Sulphur", value: "0.42%" },
    { label: "Manganese", value: "1050 ppm" },
    { label: "Iron", value: "14500 ppm" },
    { label: "Zinc", value: "294 ppm" },
    { label: "Copper", value: "54.2 ppm" },
    { label: "Boron", value: "133 ppm" },
    { label: "Sodium", value: "1950 ppm" },
  ];

  return (
    <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm mt-12">
      <h2 className="text-2xl font-bold text-brand-500 mb-8">Guaranteed Analysis</h2>
      
      <div className="grid md:grid-cols-2 gap-12">
        {/* Table Column */}
        <div className="space-y-2">
          {analysisData.map((item, index) => (
            <div key={item.label} className={`flex justify-between py-2 border-b border-slate-100 ${index % 2 === 0 ? 'bg-slate-50/50' : ''} px-2`}>
              <span className="font-medium text-slate-600">{item.label}</span>
              <span className="font-bold text-slate-900">{item.value}</span>
            </div>
          ))}
        </div>

        {/* Application/Storage Column */}
        <div className="bg-brand-500/5 p-6 rounded-2xl h-fit">
          <h3 className="font-bold text-brand-500 mb-4">Application Guide</h3>
          <p className="text-slate-700 leading-relaxed mb-6">
            <strong>Planting Holes:</strong> Mix 1 handful with soil.
            <br />
            <strong>Top Dressing:</strong> Apply 500g to 1000g per tree for each year of age and 150g to 300g per M² for vegetables and flowers.
          </p>
          
          <h3 className="font-bold text-brand-500 mb-2">Storage</h3>
          <p className="text-slate-700 text-sm italic">Store in a Cool Dry Place</p>
        </div>
      </div>
    </div>
  );
}
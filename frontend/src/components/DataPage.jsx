export default function DataPage() {
    return (
      <div className="pt-20 px-6 max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-white-900 text-center">MAXX Energy Dashboard</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded shadow text-black">Chart 1</div>
          <div className="bg-white p-6 rounded shadow text-black">Chart 2</div>
        </div>
      </div>
    );
  }
  
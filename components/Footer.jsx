export default function Footer() {
  return (
    <footer className="bg-gray-50 py-12 border-t border-gray-200 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left flex flex-col md:flex-row justify-between items-center gap-6">
        <div>
          <span className="font-bold text-2xl text-blue-600">SWAIS</span>
          <p className="text-gray-500 mt-2 text-sm max-w-sm">
            Intelligent enterprise platforms for operational visibility and decision-making.
          </p>
        </div>
        <div className="text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Saraf Worldsphere AI Services.</p>
          <p className="mt-1">All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

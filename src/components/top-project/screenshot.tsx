function Screenshot() {
  return (
    <>
      <div className="relative group max-w-7xl">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-500 rounded-xl blur opacity-30 group-hover:opacity-50 transition duration-300" />
        <div className="relative w-full bg-black/80 border border-gray-800 rounded-xl overflow-hidden">
          <img
            src="intelix.png"
            className="object-cover rounded-2xl aspect-auto w-full"
            style={{
              boxShadow: `
              0 0 10px rgba(142, 112, 251, 0.4),
              0 0 20px rgba(142, 112, 251, 0.2),
              inset 0 0 1px rgba(142, 112, 251, 0.1)
            `,
            }}
          />
        </div>
      </div>
    </>
  );
}

export default Screenshot;

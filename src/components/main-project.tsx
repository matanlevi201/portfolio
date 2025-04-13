function MainProject() {
  return (
    <div className="relative flex justify-center w-full h-xl p-10">
      <img
        src="intelix.png"
        className="object-cover rounded-2xl aspect-auto w-full h-full max-w-6xl"
        style={{
          boxShadow: `
            0 0 10px rgba(142, 112, 251, 0.4),
            0 0 20px rgba(142, 112, 251, 0.2),
            inset 0 0 1px rgba(142, 112, 251, 0.1)
          `,
        }}
      />

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black to-transparent" />
    </div>
  );
}

export default MainProject;

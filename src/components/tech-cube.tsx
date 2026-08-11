function TechCube(skill: {
  name: string;
  icon: string;
  className?: string;
  colored?: boolean;
}) {
  return (
    <div key={skill.name} className="flex flex-col items-center justify-center">
      <div
        className={`
      absolute group flex items-center justify-center size-12.5 mb-3 transition-all duration-300 rounded-md border light:border-gray-300 dark:border-gray-800 shadow-md
      ${skill.className}

    `}
      >
        {skill.colored ? (
          <>
            <div
              className={`
        absolute inset-0 transition-opacity duration-300 rounded-md
        bg-[radial-gradient(circle_at_50%_50%,rgba(120,0,255,0.5)_0%,rgba(0,200,255,0.5)_100%)]
        opacity-30 
      `}
            ></div>

            {/* Icon */}
            <i
              className={`${skill.icon} text-3xl transition-all duration-300 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-700`}
            ></i>
          </>
        ) : (
          <>
            {" "}
            <div
              className={`
        absolute inset-0 transition-opacity duration-300 rounded-md
        bg-[radial-gradient(circle_at_50%_50%,rgba(120,0,255,0.5)_0%,rgba(0,200,255,0.5)_100%)]
        opacity-0 
      `}
            ></div>
            {/* Icon */}
            <i
              className={`${skill.icon} text-3xl transition-all duration-300 text-gray-500`}
            ></i>
          </>
        )}

        {/* <div
          className={`
        absolute inset-0 transition-opacity duration-300 rounded-md
        bg-[radial-gradient(circle_at_50%_50%,rgba(120,0,255,0.5)_0%,rgba(0,200,255,0.5)_100%)]
        opacity-0 group-hover:opacity-30
      `}
        ></div>
        <i
          className={`${skill.icon} text-3xl transition-all duration-300 text-gray-500 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-blue-700`}
        ></i> */}
      </div>
    </div>
  );
}

export default TechCube;

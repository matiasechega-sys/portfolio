export function OgImageContent() {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "center",
        background: "#09090b",
        padding: "80px",
        fontFamily: "system-ui, sans-serif",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: 96,
          height: 96,
          borderRadius: 20,
          background: "#2563eb",
          color: "#fff",
          fontSize: 40,
          fontWeight: 700,
          marginBottom: 40,
        }}
      >
        ME
      </div>
      <div
        style={{
          fontSize: 64,
          fontWeight: 700,
          color: "#fafafa",
          marginBottom: 16,
        }}
      >
        Matías Echegaray
      </div>
      <div style={{ fontSize: 34, color: "#a1a1aa", marginBottom: 32 }}>
        Desarrollador Full Stack
      </div>
      <div style={{ display: "flex", gap: 16 }}>
        {["C# / .NET", "React", "Next.js", "QA"].map((tag) => (
          <div
            key={tag}
            style={{
              display: "flex",
              fontSize: 24,
              color: "#93c5fd",
              border: "1px solid #3f3f46",
              borderRadius: 9999,
              padding: "8px 20px",
            }}
          >
            {tag}
          </div>
        ))}
      </div>
    </div>
  );
}

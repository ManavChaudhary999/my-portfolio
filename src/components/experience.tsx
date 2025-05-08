import { Circle } from "lucide-react"

export function Experience() {
  const experiences = [
    {
      title: "Frontend Lead",
      company: "ngno.com",
      period: "PRESENT",
      current: true,
    },
    {
      title: "Founding Engineer",
      company: "Speedybrand",
      period: "YC-W23",
      current: false,
    },
    {
      title: "Founding Engineer",
      company: "Maya Labs",
      period: "YC-S22",
      current: false,
    },
  ]

  return (
    <section id="blogs" className="my-12">
      <h2 className="text-xl font-semibold mb-6">Experience</h2>
      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <div key={index} className="flex items-start">
            <div className="mr-4 mt-1">
              {exp.current ? (
                <Circle className="h-4 w-4 fill-primary stroke-primary" />
              ) : (
                <div className="h-4 w-4 rounded-full bg-muted-foreground/20" />
              )}
            </div>
            <div>
              <div className="flex items-center">
                <h3 className="font-medium">{exp.title}</h3>
                {exp.current && (
                  <span className="ml-2 text-xs bg-muted px-2 py-0.5 rounded text-muted-foreground">{exp.period}</span>
                )}
              </div>
              <p className="text-muted-foreground text-sm">
                {exp.company} {!exp.current && `(${exp.period})`}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}


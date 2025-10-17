import { Card } from '@rusalka/ui';

export default async function ProjectList() {
  const res = await fetch('http://localhost:8080/api/projects');
  const data = await res.json();

  return (
    <div>
      {data.map((x: any) => {
        return (
          <Card key={x.id}>
            <h3>{x.title}</h3>
            <div>
              <p>{x.description}</p>
              {x.github_repo}
            </div>
          </Card>
        );
      })}
    </div>
  );
}

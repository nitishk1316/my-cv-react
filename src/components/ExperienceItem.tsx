interface ExperienceItemProps {
  title: string;
  companyName?: string;
  date?: string;
  list?: string[];
}

export default function ExperienceItem({
  title,
  companyName,
  date,
  list,
}: ExperienceItemProps) {
  return (
    <div className="item">
      <h4 className="text-h1">{title}</h4>
			<h4 className="text-h2">{companyName}</h4>
      <h4 className="text-h3">{date}</h4>
      {list && (
        <ul>
          {list.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

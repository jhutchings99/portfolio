interface TagProps {
  name: string;
}

export default function Tag({ name }: TagProps) {
  return (
    <div className="bg-accent text-white px-3 py-1 rounded-full text-sm">
      <p>{name}</p>
    </div>
  );
}

import { people } from "../data/unsplash_images";

export default function Example() {
  return (
    <ul className="divide-y divide-gray-200 flex shrink-o p-6">
      {people.map((person) => (
        <li key={person.email} className="py-4 flex shrink-0">
          <img className="h-15 w-15 rounded-full" src={person.image} alt="" />
          <div className="ml-3">
            <p className="text-sm font-medium text-gray-900">{person.name}</p>
            <p className="text-sm text-gray-500">{person.email}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}

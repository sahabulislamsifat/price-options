const Links = ({ route }) => {
  return (
    <div>
      <li className="px-12  hover:bg-blue-500">
        <a href={route.path}>{route.name}</a>
      </li>
    </div>
  );
};

export default Links;

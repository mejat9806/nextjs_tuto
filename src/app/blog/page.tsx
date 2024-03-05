import PostCard from "@/component/postCard/PostCard";
const imageSrcs = [
  {
    id: 1,
    url: "https://images.pexels.com/photos/20447470/pexels-photo-20447470/free-photo-of-kawah-ijen.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "photo-of-kawah-ijen",
  },
  {
    id: 2,
    url: "https://images.pexels.com/photos/20350889/pexels-photo-20350889/free-photo-of-a-church-in-the-background.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "photo-of-a-church-in-the-background",
  },
  {
    id: 3,
    url: "https://images.pexels.com/photos/15267028/pexels-photo-15267028/free-photo-of-close-up-of-vintage-bicycle.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "close-up-of-vintage-bicycle",
  },
  {
    id: 4,
    url: "https://images.pexels.com/photos/19780239/pexels-photo-19780239/free-photo-of-trees-on-snowy-day.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "trees-on-snowy-day",
  },
];
function page() {
  return (
    <div className="grid grid-cols-3 gap-10 ">
      {imageSrcs.map((image) => (
        <PostCard src={image.url} key={image.id} title={image.title} />
      ))}
    </div>
  );
}

export default page;

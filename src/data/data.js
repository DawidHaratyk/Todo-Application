import image from "../images/image.jpg";
import image2 from "../images/image2.jpg";

const categoryTitles = [
  {
    title: "Overdue",
    color: "red",
  },
  {
    title: "Today",
    color: "gray",
  },
  {
    title: "Upcoming",
    color: "green",
  },
  {
    title: "Completed",
    color: "",
  },
];

const tasks = [
  {
    taskName: "First task",
    dueDate: "11/10/2021",
    isDone: false,
    image: image,
    username: "Martyna Jota",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo nulla asperiores iste vel minima illo expedita doloremque nostrum.",
    id: 1,
  },
  {
    taskName: "Second task",
    dueDate: "10/1/2021",
    isDone: false,
    image: image2,
    username: "Anna Kowalska",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo nulla asperiores iste vel minima illo expedita doloremque nostrum. Ipsum minima at adipisci veritatis explicabo culpa ad itaque nobis laudantium velit.",
    id: 2,
  },
  {
    taskName: "Third task",
    dueDate: "12/5/2021",
    isDone: false,
    image: image,
    username: "Martyna Jota",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo nulla asperiores iste vel minima illo expedita doloremque nostrum.",
    id: 3,
  },
  {
    taskName: "Fourth task",
    dueDate: "11/20/2021",
    isDone: false,
    image: image,
    username: "Martyna Jota",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo nulla asperiores iste vel minima illo expedita doloremque nostrum. Ipsum minima at adipisci veritatis explicabo culpa ad itaque nobis laudantium velit.",
    id: 4,
  },
  {
    taskName: "Fifth task",
    dueDate: "11/2/2021",
    isDone: false,
    image: image,
    username: "Martyna Jota",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo nulla asperiores iste vel minima illo expedita doloremque nostrum. Ipsum minima at adipisci veritatis explicabo culpa ad itaque nobis laudantium velit.",
    id: 5,
  },
  {
    taskName: "Sixth task",
    dueDate: "10/1/2021",
    isDone: true,
    image: image2,
    username: "Anna Kowalska",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo nulla asperiores iste vel minima illo expedita doloremque nostrum.",
    id: 6,
  },
];

export { categoryTitles, tasks };

import { useFormInput } from '../hooks';
import { firestore } from '../firebase';
import { useNavigate } from "react-router-dom";

function CreatePost() {
  const title= useFormInput();
  const subTitle = useFormInput();
  const content= useFormInput();
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    console.log('title', title.value);
    console.log('subTitle', subTitle.value);
    console.log('content', content.value);

    firestore.collection('posts').add({
        title:title.value,
        subtitle:subTitle.value,
        content:content.value
    })

    navigate("/");
  }

  return (
    <div className="create-post">
      <h1>Create Post</h1>

      <form onSubmit={handleSubmit}>
        <div className="form-field">
          <label>Title</label>
          <input {...title}/>
        </div>

        <div className="form-field">
          <label>Sub Title</label>
          <input {...subTitle}/>
        </div>

        <div className="form-field">
          <label>Content</label>
          <textarea {...content}></textarea>
        </div>

        <button className="create-post-btn">Create Post</button>
      </form>
    </div>
  );
}

export default CreatePost;

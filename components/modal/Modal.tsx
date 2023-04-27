/** @format */
import { useRecoilState } from "recoil";
import { ModelAtom } from "../../pages/quiz/sub-category";

function Modal({ title, discription }: any) {
  const [model, setModel] = useRecoilState(ModelAtom);
  const onCloseHandler = () => {
    setModel(false);
  };
  const onModalClickHandler = (e: React.MouseEvent<HTMLDivElement>) => {
    // Close the modal if the user clicks anywhere on the screen outside of the modal box
    if (e.target === e.currentTarget) {
      onCloseHandler();
    }
  };
  return (
    <div
      className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center z-50"
      id="my-modal-3"
      onClick={onModalClickHandler}
    >
      <div className="modal-box bg-white" onClick={(e) => e.stopPropagation()}>
        <h3 className="font-bold text-2xl capitalize">{title}</h3>
        <p className="py-4 text-lg">{discription}</p>
        <div className="modal-laction ">
          <a
            href="#"
            onClick={onCloseHandler}
            className="btn bg-red-500 text-white border-none "
          >
            Close
          </a>
        </div>
      </div>
    </div>
  );
}

export default Modal;

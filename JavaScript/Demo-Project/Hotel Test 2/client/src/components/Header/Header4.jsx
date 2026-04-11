import "./Header4.css";

export default function Header3(){
    return <>
        <div className="show-more-content flex justify-between pl-2 pr-2 pt-2 pb-2 font-medium z-50">
        <div className="cir" onClick={close}>
          <i className="bi bi-chevron-left"></i>
        </div>
        <div className="flex gap-7 panel ">
          <button className="share">
            <i className="bi bi-upload mr-1 "></i>
            <span className="S">Share</span>
          </button>
          <button className="mr-14 save" id="btnh">
            <i className="bi bi-heart mr-1 "></i>
            <span className="S">Save</span>
          </button>
        </div>
      </div>
    </>
}

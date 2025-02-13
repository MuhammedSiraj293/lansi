import Image from "next/image";

function InfoCard({
  icon,
  title,
  count,
  actionText,
  actionLink,
  className,
  bgColor,
}) {
  return (
    <div
      className={`p-5 my-2 text-white text-center d-flex justify-content-center align-item-center align-content-center ${className}`}
      style={{
        backgroundColor: bgColor,
        minHeight: "220px",
      }}
    >
      <div className="d-flex flex-column align-items-center justify-content-center h-100 align-content-center">
        <h5>{title}</h5>
        <p className="h2 fw-bold">{count}</p>
        {actionText && actionLink && (
          <a
            href={actionLink}
            className="mt-2 d-inline-block bg-white text-black py-1 px-3 rounded"
          >
            {actionText}
          </a>
        )}
      </div>
    </div>
  );
}

export default InfoCard;

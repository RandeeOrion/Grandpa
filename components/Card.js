export default function Card(props){
  let { details } = props;

  let styles = {
    title: "font-bold py-4 px-2 text-xl",
    body: "text-teal-800 px-2"
  }

  return(
    <div className="bg-orange-200 w-1/2 h-80 overflow-hidden">

      {details.title ? <h2 className={styles.title}>{details.title}</h2> : null}

      {details.body ? <p className={styles.body}>{details.body}</p> : null}

      {details.img ? details.img : null}

    </div>
  )
}
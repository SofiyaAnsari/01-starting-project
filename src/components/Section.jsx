export default function Section({title,id,children,...props}){
    return(
        <section {...props}>
            <h2>{title}</h2>
            {children}
        </section>
    )
}
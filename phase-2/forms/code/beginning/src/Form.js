export default function Form({formUpdate, formObj, submitForm}) {
    return (
        <form onSubmit={event => submitForm(event)}>
            <label><strong>Name </strong>
                <input name="name" onChange={event => formUpdate(event)} value={formObj.name}/>
            </label>
            <br/><br/>
            <label><strong>Movie </strong>
                <input name="movie" onChange={event => formUpdate(event)} value={formObj.movie}/>
            </label>
            <br/><br/>
            <em>Your lucky number is</em> <strong>{formObj.number}</strong>!
            <br/><br/>
            <input type="submit" value="Sign Up"/>
            <h2>Members</h2>
            <div>
                {membersList(formObj)}
            </div>
            
        </form>
    )
}

function membersList(formObj){
    let i = 0
    if(formObj.members[0] == undefined){
        return <sub>Fill out the form to add your first member!</sub>
    }
    else{
        return (
            <ul>
                {formObj.members.map(element => {
                    i++
                    return <Member key={i} member={element}/>
                })}
            </ul>
        )
    }
}

function Member({member}){
    return <li>{member.name + " | " + member.movie + " | " + member.number}</li>
}
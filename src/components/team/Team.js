import { MemberCard } from '../memberCard/MemberCard';
import './Team.css'

export const Team = (props) => {
    return(
        props.members.length > 0 && <section style={{backgroundColor: props.secondaryColor}} className='team'>
            <h3 style={{borderColor: props.primaryColor}}>{props.name}</h3>
            <div className='team-members'>
                {props.members.map(member => <MemberCard key={member.name} name={member.name} position={member.position} image={member.image} colorDecoration={props.primaryColor}/>)}
            </div>
        </section>
    );
}

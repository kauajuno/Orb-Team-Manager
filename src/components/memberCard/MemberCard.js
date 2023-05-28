import './MemberCard.css'

export const MemberCard = ({name, image, position, colorDecoration}) => {
    return(
        <div className='member-card'>
            <div className='header' style={{backgroundColor: colorDecoration}}>
                <img src={image} alt={name}/>
            </div>
            <div className='desc'>
                <h4 style={{color: colorDecoration}}>{name}</h4>
                <h5>{position}</h5>
            </div>
        </div>
    );
}
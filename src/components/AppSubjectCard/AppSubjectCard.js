const AppSubjectCard = ({ imageUrl, title, content, buttonLabel, onClick }) => {
    return (
        <div
            style={{
                background: `url(${imageUrl})`,
                backgroundSize: 'cover',
                fontFamily: 'Poppins',
                borderRadius: '25px',
                position: 'relative',
                minHeight: '350px',
            }}
        >
            <div
                style={{
                    backgroundColor: 'rgb(255, 255, 255)',
                    borderRadius: '35px',
                    position: 'absolute',
                    bottom: '2px',
                    width: '102%',
                    marginLeft: '-1%',
                    paddingLeft: '10%',
                    paddingRight: '10%',
                    paddingBottom: '3%'
                }}
            >
                <h2
                    style={{
                        color: 'black',
                        fontFamily: 'Poppins',
                        textAlign: 'left'
                    }}
                >{title}</h2>
                <p
                    style={{
                        color: '#969696',
                        fontFamily: 'Poppins',
                        textAlign: 'left',
                        fontSize: 'medium',
                        fontWeight: 'lighter'
                    }}
                >{content}</p>
                <button onClick={onClick}
                        style={{
                            float: 'right',
                            background: 'none',
                            fontSize: 'medium',
                            cursor: 'pointer',
                            borderRadius: '7px',
                            paddingRight: '20px',
                            paddingLeft: '20px',
                            paddingTop: '3px',
                            paddingBottom: '3px',
                }}
                >
                    {buttonLabel}
                </button>
            </div>
        </div>
    );
};

export default AppSubjectCard;

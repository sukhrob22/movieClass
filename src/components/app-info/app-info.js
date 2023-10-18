import './app-info.scss';

const AppInfo = ({ allMoviesLength, favouriteMovieCount }) => {
    return (
        <div className='app-info'>
            <p className='fs-3 text-uppercase'>
                Barcha kinolar soni: {allMoviesLength}
            </p>
            <p className='fs-4 text-uppercase'>
                ko'rilgan kinolar soni: {favouriteMovieCount}{' '}
            </p>
        </div>
    );
};

export default AppInfo;

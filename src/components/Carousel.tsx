import Carousel from 'react-material-ui-carousel';
import useFetch from '../helpers/useFetch';
import Container from './container'

export const CarouselImages = (props: any) => {
    // grab the list of photos in the project public directory
    const { data, error } = useFetch('api/photos', { body: { 'project': props.project } })

    if (error) return (<Container>Failed to load</Container>)
    if (!data) return (<Container>Loading...</Container>)

    return (
        <div>
            {data.photos ? (
                <Carousel>
                    {
                        data.photos.map((img: string) => <img style={{ width: "100%", maxHeight: "25vw" }} key={img} src={`${props.project}/${img}`} />)
                    }
                </Carousel>) : null
            }
        </div>

    );
}
interface YoutubeProps {
    link: string
};

function Youtube(props: YoutubeProps) {
    return (
        <div className="w-full h-[25rem]">
            <iframe
                className="w-full h-full"
                src={props.link}
                title="Sample Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            ></iframe>
        </div>
    )
}

export default Youtube;
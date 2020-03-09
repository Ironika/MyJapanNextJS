import React from 'react'

export const SkeletonItem = ({ style, className }) => (
    <div className={className ? `${className} skeleton-item` : 'skeleton-item'} style={style} />
);

export const CardNewsSkeleton = () => {
    const style = { height: "400px" }
    return (
        <div className="card-news-skeleton">
            <SkeletonItem style={style} />
        </div>
    )
}

export const CardScansSkeleton = () => {
    const style = { height: "90px" }
    return (
        <div className="card-scans-skeleton">
            <SkeletonItem style={style} />
        </div>
    )
}

export const CardScansVaSkeleton = () => {
    const style = { height: "300px" }
    return (
        <div className="card-scansva-skeleton">
            <SkeletonItem style={style} />
        </div>
    )
}

export const CardAnimesSkeleton = () => {
    const style = { height: "300px" }
    return (
        <div className="card-animes-skeleton">
            <SkeletonItem style={style} />
        </div>
    )
}

export const CardNewsDevSkeleton = () => {
    const style = { height: "100px" }
    return (
        <div className="card-newsdev-skeleton">
            <SkeletonItem style={style} />
        </div>
    )
}
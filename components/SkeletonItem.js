import React from 'react'

export const SkeletonItem = ({ style, className }) => ( 
    <div className={className ? `${className} skeleton-item` : 'skeleton-item'} style={style} />
);

export const CardNewsSkeleton = () => {
    return (
        <div className="card-news-skeleton">
            <SkeletonItem style={{ height: "400px" }} />
        </div>
    )
}

export const CardScansSkeleton = () => {
    return (
        <div className="card-scans-skeleton">
            <SkeletonItem style={{ height: "90px" }} />
        </div>
    )
}

export const CardScansVaSkeleton = () => {
    return (
        <div className="card-scansva-skeleton">
            <SkeletonItem style={{ height: "300px" }} />
        </div>
    )
}

export const CardAnimesSkeleton = () => {
    return (
        <div className="card-animes-skeleton">
            <SkeletonItem style={{ height: "300px" }} />
        </div>
    )
}
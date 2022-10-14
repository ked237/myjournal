import React from 'react';
import PhotoEntry from './PhotoEntry';
import entries from './data/photo-entries';

class AlbumMaker extends React.Component {

    render() {

        console.log(entries);

        return(
            <div className="flex-container">
            {
                entries.itemlist.map((photo) => {
                    return <PhotoEntry key={photo.src} src={photo.src} short={photo.short} caption={photo.caption}/>
                }
                )
            }
            {/*  <PhotoEntry src="berlin.jpg" location="Berlin,Germany" caption="Beauty of Europe"/>
                <PhotoEntry src="beverly-hills.jpg" location="Bervely Hills" caption="California Dreaming"/>
                <PhotoEntry src="maple-leaf.jpg" location="Toronto, CA" caption="Cold Neighbour"/>
                <PhotoEntry src="wings.jpg" location="" caption=""/>
                <PhotoEntry src="hawaii.jpg" location="" caption=""/>
        <PhotoEntry src="london.jpg" location="" caption=""/> */}

            </div>
        )
    }

}

export default AlbumMaker;

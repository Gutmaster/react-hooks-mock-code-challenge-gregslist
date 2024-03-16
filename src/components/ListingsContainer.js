import React, {useState, useEffect} from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({searchFilter}) {
  const [listings, setListings] = useState([])

  useEffect(() => {
    fetch('http://localhost:6001/listings')
    .then(response => response.json())
    .then(data => {
      setListings(data.filter(listing => listing.description.includes(searchFilter)))
    })
  }, [searchFilter])

  function removeListing(id){
    fetch(`http://localhost:6001/listings/${id}`, {
      method: 'DELETE'
    }).then(setListings(listings.filter(listing => listing.id !== id)))
  }

  return (
    <main>
      <ul className="cards">
        {listings.map(listing => <ListingCard key={listing.id} description={listing.description} image={listing.image} location={listing.location} id={listing.id} deleter={removeListing}/>)}
      </ul>
    </main>
  );
}

export default ListingsContainer;

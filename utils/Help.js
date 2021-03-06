.import "../db/Queries.js" as Q
.import "../utils/Player.js" as Player

function rootWidth()
{
    return root.width;
}

function rootHeight()
{
    return root.height;
}

function setStars(stars)
{
    switch (stars)
    {
    case "0":
    case 0:
        return  " ";

    case "1":
    case 1:
        return  "\uf4CE";

    case "2":
    case 2:
        return "\uf4CE \uf4CE";

    case "3":
    case 3:
        return  "\uf4CE \uf4CE \uf4CE";

    case "4":
    case 4:
        return  "\uf4CE \uf4CE \uf4CE \uf4CE";

    case "5":
    case 5:
        return "\uf4CE \uf4CE \uf4CE \uf4CE \uf4CE";

    default: return "error";
    }
}

function refreshCollection(size)
{
    if(!isMobile && size>0) bae.notify("Collection updated", size+" new tracks added...")

    refreshTracks()
    refreshAlbums()
    refreshArtists()
    refreshFolders()

}
function refreshFolders()
{
    foldersView.populate()
}

function refreshTracks()
{
    tracksView.list.refresh()
}

function refreshAlbums()
{
    albumsView.list.refresh()
}

function refreshArtists()
{
    artistsView.list.refresh()
}

function notify(title, body)
{
    if(isMobile)
        root.notify(title+"\n"+body)
    else
        bae.notify(title, body)
}


function addPlaylist(playlist)
{
    playlistsView.playlistViewModel.model.insert(0, playlist)
}

function searchFor(query)
{
    if(currentView !== viewsIndex.search)
        currentView = viewsIndex.search

    searchView.runSearch(query)
}

function addSource()
{
    sourcesDialog.open()
}

function addToSelection(item)
{
    item.thumbnail= item.artwork
    item.label= item.title
    item.mime= "image"
    item.tooltip= item.url
    item.path= item.url
    selectionBar.append(item)
}

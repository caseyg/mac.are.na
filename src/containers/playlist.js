import React, { Component } from 'react'
import { find, findIndex } from 'lodash'
import { onlySongs } from '../lib/helpers'

import SongItem from '../components/SongItem'

class Playlist extends Component {

  getPlaylistLink(response) {
    return `https://www.are.na/${response.user.slug}/${response.slug}`
  }

  componentDidMount() {
    // get slug from router params and return it to <Main />
    const playlistSlug = this.props.match.params.playlistSlug
    this.props.returnSelectedPlaylist(playlistSlug)
  }

  makeSongList = (playlist) => {
    if (playlist) {
      return playlist.map((song, index) => {
        return (
          <SongItem
            key={song.id}
            song={song}
            handleSelection={() => this.props.handleSongSelection(song, index)} />
        )
      })
    }
  }

  render () {
    return (
      <div className='w-100 min-vh-100 pa3 pa5-ns'>
        {this.makeSongList(this.props.currentOpenPlaylist)}
      </div>
    )
  }
}

export default Playlist

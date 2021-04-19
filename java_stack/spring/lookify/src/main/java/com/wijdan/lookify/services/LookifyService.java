package com.wijdan.lookify.services;

import com.wijdan.lookify.repositories.LookifyRepository;

import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

import com.wijdan.lookify.models.Song;

@Service
public class LookifyService {
    private final LookifyRepository lookifyRepo;

    public LookifyService(LookifyRepository lookifyRepo) {
        this.lookifyRepo = lookifyRepo;
    }

    // Get All data
    public List<Song> allSongs() {
        return lookifyRepo.findAll();
    }

    // create
    public Song createSong(Song song) {
        return lookifyRepo.save(song);
    }

    // get data for one
    public Song findSong(Long id) {
        Optional<Song> song = lookifyRepo.findById(id);
        return song.get();
    }

    // delete
    public void deleteSong(Long id) {
        lookifyRepo.deleteById(id);
    }

    // update
    public Song updateSong(Song toEdit) {
        return lookifyRepo.save(toEdit);
    }

    // https://docs.spring.io/spring-data/jpa/docs/current/reference/html/#repositories.limit-query-result
    // https://docs.spring.io/spring-data/jpa/docs/current/reference/html/#jpa.query-methods
    // find top 10 songs by raiting
    public List<Song> findTopTen() {
        return lookifyRepo.findTop10ByOrderByRatingDesc();
    }

    // search for songs has artist name
    public List<Song> searchSongsByArtist(String artist) {
        // System.out.println(artist);
        return lookifyRepo.findByArtistContaining(artist);
    }
}
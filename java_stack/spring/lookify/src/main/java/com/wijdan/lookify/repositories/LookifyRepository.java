package com.wijdan.lookify.repositories;

import java.util.List;

import com.wijdan.lookify.models.Song;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface LookifyRepository extends CrudRepository<Song, Long>{
    List<Song> findAll();
	List<Song> findTop10ByOrderByRatingDesc();
	List<Song> findByArtistContaining(String artist);
}
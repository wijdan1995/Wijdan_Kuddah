package com.wijdan.lookify.controllers;

import com.wijdan.lookify.services.LookifyService;

import java.util.List;

import javax.validation.Valid;

import com.wijdan.lookify.models.Song;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class LookifyController {
    private final LookifyService lookifyServ;

    public LookifyController(LookifyService lookifyServ) {
        this.lookifyServ = lookifyServ;
    }

    @RequestMapping("/")
    public String index() {
        return "index.jsp";
    }

    // route to show dashboard with songs
    @RequestMapping("/dashboard")
    public String dashboard( Model model) {
        List<Song> songs = lookifyServ.allSongs();
        model.addAttribute("songs", songs);
        return "dashboard.jsp";
    }

    //  new song
    @RequestMapping("/songs/new")
	public String create(@ModelAttribute("song") Song song) {
		return "new.jsp";
    }
    
    // handle create
    @RequestMapping(value = "/songs", method = RequestMethod.POST)
    public String create(@Valid @ModelAttribute("song") Song song, BindingResult result) {
        if (result.hasErrors()) {
            return "new.jsp";
        } else {
            lookifyServ.createSong(song);
            return "redirect:/dashboard";
        }
    }

    // show one song
    @RequestMapping("/songs/{id}")
    public String show(@PathVariable("id") Long id, Model model) {
        Song song = lookifyServ.findSong(id);
        model.addAttribute("song", song);
        return "show.jsp";
    }

    // delete
    @RequestMapping(value="/songs/{id}/delete", method=RequestMethod.POST)
    public String destroy(@PathVariable("id") Long id) {
        lookifyServ.deleteSong(id);
        return "redirect:/dashboard";
    }

    // search artists
    @RequestMapping("/search")
    public String show(@RequestParam("artist") String artist, Model model) {
        List<Song> songs = lookifyServ.searchSongsByArtist(artist);
        // System.out.println(songs);
        model.addAttribute("songs", songs);
        model.addAttribute("artist", artist);
        return "results.jsp";
    }

    // top 10
    @RequestMapping("/search/topTen")
    public String topTen( Model model) {
        List<Song> songs = lookifyServ.findTopTen();
        model.addAttribute("songs", songs);
        return "top.jsp";
    }


}
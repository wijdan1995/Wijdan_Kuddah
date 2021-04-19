package java_stack.javaFun;

import java.util.HashMap;
import java.util.Set;


public class TrackList {
    public static void main(String[] args) {
        HashMap<String, String> trackList = new HashMap<String, String>();
        // add
        trackList.put("title1", "lyrics song 1");
        trackList.put("title2", "lyrics song 2");
        trackList.put("title3", "lyrics song 3");
        trackList.put("title4", "lyrics song 4");
        trackList.put("title5", "lyrics song 5");

        // pull one 
        String song1Lyrics = trackList.get("title1");
        System.out.println("Song 1 Lyrics => " + song1Lyrics);

        // print all
        Set<String> keys = trackList.keySet();
        for (String key : keys) {
            System.out.println(key + ": " + trackList.get(key));
        }
    }
}

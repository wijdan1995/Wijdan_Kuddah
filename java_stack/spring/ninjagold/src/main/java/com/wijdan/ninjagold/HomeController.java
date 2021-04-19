package com.wijdan.ninjagold;



import org.springframework.stereotype.Controller;
import java.util.Random;
import java.util.ArrayList;
import java.text.SimpleDateFormat;
import java.util.Date;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class HomeController {
	private int gold = 0;
	private ArrayList<String> activites  = new ArrayList<String>();
	public ArrayList<String> getActivites() {
		return activites;
	}

	public void setActivites(ArrayList<String> activites) {
		this.activites = activites;
	}

	public int getGold() {
		return gold;
	}

	public void setGold(int gold) {
		this.gold = gold;
	}

	@RequestMapping("/")
    public String home(Model model) {
		model.addAttribute("gold", getGold());
		model.addAttribute("activities", getActivites());
        return "index.jsp";
    }
	
	@RequestMapping(value="/prosses", method=RequestMethod.POST)
    public String prosses(@RequestParam(value="action") String action) {
		Random rand = new Random();
		String pattern = "MMMM D yyyy hh:mm a";
		SimpleDateFormat dm = new SimpleDateFormat(pattern);
//		rand.nextInt((100 - 55) + 1) + 55
		if(action.equals("farm")) {
			int num = (rand.nextInt((20 - 10) + 1) + 10);
			setGold(getGold() + num);
			String text = "Earned " +  num + " golds from the farm! " + dm.format(new Date());
			activites.add(text);
		} else if (action.equals("cave")) {
			int num =  (rand.nextInt((10 - 5) + 1) + 5);
			setGold(getGold() + num);
			String text = "Earned " +  num + " golds from the cave! " + dm.format(new java.util.Date());
			activites.add(text);
		} else if (action.equals("house")) {
			int num =  (rand.nextInt((5 - 2) + 1) + 2);
			setGold(getGold() + num);
			String text = "Earned " +  num + " golds from the house! " + dm.format(new java.util.Date());
			activites.add(text);
		} else if (action.equals("casino")) {
			int num =  (rand.nextInt((50 - (-50)) + 1) + (-50));
			setGold(getGold() + num);
			String text;
			if (num > 0 ) {
				text = "Entered a casino and earned " +  num + " golds.... " + dm.format(new java.util.Date());
			} else {
				text = "Entered a casino and and lost " +  num + " golds.... Ouch .. " + dm.format(new java.util.Date());
			}
			
			activites.add(text);
		}
			return "redirect:/";
        
  }
	
	@RequestMapping(value="/reset", method=RequestMethod.POST)
    public String reset() {
		setGold(0);
		activites.clear();
		return "redirect:/";
        
  }
	

}


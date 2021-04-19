package com.wijdan.languages.services;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.wijdan.languages.models.Language;
import com.wijdan.languages.repositories.LanguageRepository;

@Service
public class LanguageService {
    // adding the book repository as a dependency
    private final LanguageRepository languageRepository;

    public LanguageService(LanguageRepository languageRepository) {
        this.languageRepository = languageRepository;
    }

    // Get All data
    public List<Language> allLanguages() {
        return (List<Language>) languageRepository.findAll();
    }

    // create
    public Language createLanguage(Language lan) {
        return languageRepository.save(lan);
    }

    // get data for one
    public Language findLanguage(Long id) {
        Optional<Language> language = languageRepository.findById(id);
        return language.get();
    }

    // delete
    public void deleteLanguage(Long id) {
        languageRepository.deleteById(id);
    }

    // update
    public Language updateLanguage(Language toEdit) {
        return languageRepository.save(toEdit);
    }

}

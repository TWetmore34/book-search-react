import { useState } from "react";
import trie from "./fullTrie.json"

class TrieNode {
    constructor() {
        this.children = {};
        this.isWord = false;
    }
}

class Trie {
    constructor(presetTrie) {
        this.root = presetTrie || new TrieNode();
    }

    /* Time O(N) | Space O(N) */
    insert(word, node = this.root) {
        for (const char of word) {
            const child = node.children[char] || new TrieNode();

            node.children[char] = child;

            node = child;
        }

        node.isWord = true;
    }
    // call this for when spaces exist in additions
    insertSentence(sentence, node=this.root){
        sentence = sentence.split(' ')
        for(let i=0;i<sentence.length;i++){
            this.insert(sentence[i])
        }
    }

    /* Time O(N) | Space O(1) */
    search(word, node = this.root) {
        for (const char of word) {
            const child = node.children[char] || null;

            if (!child) return false;

            node = child;
        }

        return node.isWord;
    }

    /* Time O(N) | Space O(1) */
    startsWith(prefix, node = this.root) {
        for (const char of prefix) {
            const child = node.children[char] || null;

            if (!child) return false;

            node = child;
        }

        return true;
    }

    autoComplete(word, node=this.root){
        let results = []
        // gets to current node
        for(const letter of word){
            const childNode = node.children[letter] || null

            if(!childNode) return []

            node = childNode
        }
        // actual autocomplete
        function findWords (currentLetter, currentWord = word.split('')){
            // kill condition for recursive calls
            if(!currentLetter) return;
            for(let kiddos in currentLetter){
                // push current loop entry
                currentWord.push(kiddos)

                // if marked as word, push to results as str
                if(currentLetter[kiddos].isWord) {
                    results.push(currentWord.join(''))
                }

                // call function on the current set of children
                findWords(currentLetter[kiddos].children, currentWord)

                // once resolved, remove that letter from the currentWord array
                currentWord.pop()
            }
        }
        findWords(node.children)
        return results
    }
}

export default function useTrie() {
    return useState(new Trie(trie));
}
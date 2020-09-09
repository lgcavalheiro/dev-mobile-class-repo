from pdfminer.high_level import extract_text
from nltk.tag import pos_tag
from nltk.tokenize import word_tokenize
import nltk

nltk.download('punkt')
nltk.download('averaged_perceptron_tagger')

def main():
    text = extract_text("Projeto Grupou.pdf", page_numbers=range(14, 35)).lower()
    tagged = pre_process(text)
    chunks = filter_chunks(tagged)
    normal = []
    for c in chunks:
        if len(c) == 1: normal.append(c[0])
        else: normal.append([d[0] for d in c])
    normal.sort(key=lambda x:len(x))
    for n in normal:
        print(' '.join(n))

def pre_process(sentence):
    sentence = nltk.word_tokenize(sentence)
    sentence = nltk.pos_tag(sentence)
    np_rule = "CHUNK: {<DT>*<JJ>*<NN>+<VBD>*<VBZ>*<DT>*<NN>*}"
    cp = nltk.RegexpParser(np_rule)
    cs = cp.parse(sentence)
    return cs

def filter_chunks(tagged):
    filtered = []
    for t in tagged:
        if len(t) >= 3: filtered.append(t) 
    return filtered

if __name__ == "__main__":
    main()
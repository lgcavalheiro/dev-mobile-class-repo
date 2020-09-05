import matplotlib.pyplot as plt; plt.rcdefaults()
import numpy as np
import matplotlib.pyplot as plt
import json

def main():
    with open('natural-results.json', 'r') as f:
        res = json.load(f)
    keywords = res["keywords"]
    pairs = [ { "text": k["text"], "relevance": k["relevance"] } for k in keywords][:20]
    pairs.reverse()

    x_pos = np.arange(len(pairs))
    relevance = [p["relevance"] for p in pairs]

    plt.figure(figsize=(16,8))
    plt.barh(x_pos, relevance, align='center', alpha=0.5)
    plt.yticks(x_pos, [p["text"] for p in pairs], fontsize=8)
    plt.ylabel('Termos')
    plt.xlabel('Relevância')
    plt.title('Top 20 relevância de termos encontrados (utilizando Watson Natural Language Understanding)')

    plt.savefig('natural-results.png')
    #plt.show()

if __name__ == "__main__":
    main()
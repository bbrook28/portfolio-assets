"""Flag Wikipedia "Signs of AI writing" patterns in HTML, Markdown or text files.
Usage: python3 scan.py file [file ...]
Prints each hit with context. Literal uses (a keyboard key, a proper name) can stay."""
import re,glob,html,json,sys
W=r"causal|empirical|correlat\w*|in summary|i hope this helps|certainly!|let me know|here is a|as an ai|based on available information|not widely (?:available|documented)|additionally|align(s|ed)? with|boast(s|ed)?|bolster\w*|crucial|deep dive|delve\w*|emphasi[sz]\w*|enduring|enhanc\w*|foster\w*|garner\w*|highlight\w*|interplay|intricat\w*|landscape|meticulous\w*|pivotal|robust|showcas\w*|tapestry|testament|underscor\w*|valuable|vibrant|\bkey\b|challeng\w*|clearer|dependable|echoed|leverag\w*|\bmatters\b|multifaceted|practical|prioriti[sz]\w*|quietly|steady|universally|serves? as|stands? as|functions? as|operates? as|represents?|\bfeatures?\b|\boffers?\b|refers? to|reflect\w*|setting the stage|focal point|indelible|deeply rooted|evolving|ensur\w*|symboli[sz]\w*|contribut\w*|cultivat\w*|encompass\w*|resonat\w*|connected (with|to)|associated with|in connection|experts?|observers|despite|\brich\b|profound|exemplif\w*|commitment to|nestled|in the heart of|groundbreaking|renowned|featuring|diverse array|in summary|in conclusion|overall|consequently|notably|not just|not only|rather than|seamless\w*|elevat\w*|journey|passionate|crafted|\bmarks?\b|utiliz\w*|authored|relocated|attempted|showcase"
def text(path):
    s=open(path,encoding='utf-8').read()
    if not path.endswith(('.html','.htm')): return s
    js=re.findall(r"<script type=\"application/json\"[^>]*>(.*?)</script>",s,re.S)
    s=re.sub(r'<(script|style)[^>]*>.*?</\1>',' ',s,flags=re.S)
    s=re.sub(r'<!--.*?-->',' ',s,flags=re.S)
    alts=' '.join(re.findall(r'alt="([^"]*)"',s))
    s=re.sub(r'<br\s*/?>|</(p|li|h\d|div|figcaption|dt|dd|span|a|strong|b|small|em|i|blockquote)>',' | ',s)
    s=re.sub(r'<[^>]+>',' ',s)
    vals=[]
    def walk(o):
        if isinstance(o,dict): [walk(v) for v in o.values()]
        elif isinstance(o,list): [walk(v) for v in o]
        elif isinstance(o,str) and ' ' in o: vals.append(o)
    for j in js:
        try: walk(json.loads(j))
        except Exception: vals.append(re.sub(r'[{}\[\]"]',' ',j))
    return html.unescape(s+' | '+' | '.join(vals)+' | '+alts)
files=sys.argv[1:]
tot=0
for f in files:
    t=re.sub(r'\s+',' ',text(f))
    hits=[]
    for m in re.finditer(W,t,re.I):
        hits.append('W['+m.group(0)+']: …'+t[max(0,m.start()-45):m.end()+35]+'…')
    for m in re.finditer(r'—',t): hits.append('DASH: …'+t[max(0,m.start()-40):m.end()+30]+'…')
    for m in re.finditer(r', (highlighting|ensuring|reflecting|making|creating|giving|turning|letting|leaving|keeping|helping|showing|adding|allowing|enabling|providing)\b',t): hits.append('ING: …'+t[max(0,m.start()-50):m.end()+30]+'…')
    curly=len(re.findall(r"[“”‘’]",t))
    print('###',f.split('/')[-1],len(hits),'hits, curly quotes:',curly)
    for h in hits: print('  ',h)
    tot+=len(hits)
print('TOTAL',tot)

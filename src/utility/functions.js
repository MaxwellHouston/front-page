
export const dateConverter = (article) => {
    let date = new Date(article.created*1000)
    return date.toLocaleDateString();
};

export const renderAwards = (article) => {
    let awards = article.all_awardings;
    if( awards.length === 0) {return};
        return awards.map( award => (
        <div className="award">
        <img src={award.icon_url} alt={award.name} />
        <p>{award.count}</p>
    </div>))
}
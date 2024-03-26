function HomePage() {
    return (
        <section className="homepage">
            <h2>Catatan Aktif</h2>

            <section className="search-bar">
                <input type="search" placeholder="Cari catatan..." />
            </section>

            <section className="notes-list">
                <article className="note-item">
                    <h3 className="note-item__title">Judul Catatan</h3>
                    <p className="note-item__createdAt"><time>12/12/2021</time>
                    </p>
                    <p className="note-item__body">Isi catatan...</p>
                </article>
            </section>
        </section>
    );
}

export default HomePage;
export default function DataPage() {
  const dashboardUrl = "https://lookerstudio.google.com/embed/reporting/4d5638a2-4b2b-4bd5-8fa2-1f2c947e5147/page/LtXLF";

  const handleShare = (platform) => {
    const encodedUrl = encodeURIComponent(dashboardUrl);
    let shareUrl = "";

    switch (platform) {
      case "facebook":
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`;
        break;
      case "twitter":
        shareUrl = `https://twitter.com/intent/tweet?url=${encodedUrl}&text=Check out this live MAXX Energy dashboard!`;
        break;
      default:
        return;
    }

    window.open(shareUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="pt-20 px-6 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-white-900 text-center">MAXX Energy Data</h1>

      <div className="bg-white p-6 rounded shadow text-black">
        <iframe
          width="100%"
          height="800"
          src={dashboardUrl}
          frameBorder="0"
          style={{ border: 0 }}
          allowFullScreen
          sandbox="allow-storage-access-by-user-activation allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox"
        ></iframe>

        {/* Share Buttons */}
        <div className="flex justify-end gap-4 mt-6">
          <button onClick={() => handleShare("facebook")} title="Share on Facebook">
            <svg width="24" height="24" fill="currentColor" className="hover:opacity-75">
              <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
            </svg>
          </button>

          <button onClick={() => handleShare("twitter")} title="Share on Twitter">
            <svg width="24" height="24" fill="currentColor" className="hover:opacity-75">
              <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
            </svg>
          </button>
        </div>
      </div>

      {/* Spacer before footer */}
      <div className="mb-20"></div>
    </div>
  );
}

document.getElementById('saveContact').addEventListener('click', function() {
    // Create the vCard data
    const vCardData = `BEGIN:VCARD
VERSION:3.0
FN:Shagun Graphics
ORG:Shagun Graphics
TITLE:Printing | Designing | Gifting
TEL:+91 8287805477
EMAIL:infoy2012@gmail.com
ADR:;;11A, Veer Savarkar Block, Shakarpur, Delhi - 110092;Delhi;;110092;India
URL:https://www.shagungraphics.com
END:VCARD`;

    // Create a Blob from the vCard data
    const blob = new Blob([vCardData], { type: 'text/vcard' });
    
    // Create a temporary anchor element
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'ShagunGraphics.vcf'; // Set the vCard filename

    // Trigger the download
    link.click();
    
    alert('vCard Saved Successfully!');
});

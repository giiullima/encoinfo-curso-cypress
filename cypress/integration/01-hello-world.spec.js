describe('Hello World', function() {
    
    it('True é True', function() {
        expect(true).to.equal(true);
    });

    it('True é False', function() {
        expect(true).to.equal(false);
    });

    it('False é False', function() {
        expect(false).to.equal(false);
    });

});
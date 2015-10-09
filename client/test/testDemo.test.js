/**
 * Created by clownvary on 2015/10/9.
 * Email vary_007@163.com
 *
 */

describe('TestSer', function () {

    it("contains spec with an expectation", function() {
        expect(true).toBe(true);
    });
    /**
     * match，not macther
     */
    it("contains spec with an expectation2", function() {

        var message = "foo bar baz";

        expect(message).toMatch(/[^\W+]/);
        expect(message).not.toMatch(/quux/);
    });


    it("The 'toBeDefined' matcher compares against `undefined`", function() {
        var a = {
            foo: "foo"
        };

        expect(a.foo).toBeDefined();
        expect(a.bar).toBeUndefined();
    });
    it("The 'toBeTruthy' matcher is for boolean casting testing", function() {
        var a, foo = "foo";
        var x=7;

        expect(x).toBeTruthy();
        expect(a).not.toBeTruthy();
    });
    it("应该返回一个异常说", function () {
        var foo = function() {
            throw new TypeError("foo bar baz");
        };
        var go= function () {
            return a+1;
        }
        function get()
        {
            return 2+3;
        }

        expect(foo).toThrowError("foo bar baz");
        expect(go).toThrow();
        expect(get()).toEqual(5);
    });
})
